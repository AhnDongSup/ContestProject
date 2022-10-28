from flask import Flask,request # Flask
from flask_restful import Api, Resource, reqparse
# from flask_restx import Namespace

from googleapiclient.discovery import build
import pandas as pd
from urllib import parse
import datetime
import sys
import json 
import urllib.request
import re
import warnings # 경고창 무시
import sqlite3
import html 

conn = sqlite3.connect('words.db')
cur = conn.cursor()
api_key = 'AIzaSyBX3VS1JMv36X_wxjc8jLtp-xmZOb51eis'
yt = build("youtube", "v3", developerKey = api_key)

today = datetime.date.today()
num_of_result = 3
search_response = yt.search().list(
    q='무한도전', # 검색어
    order='viewCount', # 검색어와 연관성 순서대로. date, rating, title 등 사용 가능
    type='video',
    part='snippet',
    # publishedAfter=f'{today}T00:00:00Z',
    videoDuration='short',
    maxResults=num_of_result).execute()

v_url=[]
v_title=[]
v_channel=[]
    
    # results는 dictionary 형태로 출력
for result in search_response['items']:
    # 한글 깨질까봐 parse.unquote를 거침
    v_title.append(parse.unquote(result['snippet']['title']))
    # channel = parse.unquote(result['snippet']['channelTitle'])
    v_url.append(result['id']['videoId'])
    v_channel.append(parse.unquote(result['snippet']['channelTitle']))
# 데이터는 ls를 넣고, 컬럼 명칭은 keyword, title, url, channel로 함
df = pd.DataFrame([v_title, v_url,v_channel]).T
df.columns=['title', 'url', 'channel']

mins = []
video_title = []
video_url = []
video_channel = []
view = []
like = []

img_comments = []
img2_comments = []
comments = []



for result in range(len(df)):
    request = yt.videos().list(
        part="snippet, statistics, contentDetails",
        id=df['url'][result]
    ).execute()
    
    data = json.loads(urllib.request.urlopen("https://www.googleapis.com/youtube/v3/videos?id="+df['url'][result]+"&key="+api_key+"&part=contentDetails").read())
    
    # 영상 시간 추출 
    # PT1M50S -> 초 단위로 
    k = data['items'][0]['contentDetails']['duration']
    spl = (re.sub(r'[^0-9]',' ',k[2:]).rstrip(' ')).split(' ')
    if k[-1] == 'M' and len(spl) != 2:
        K = int(spl[0])*60
    elif k[-1] == 'S' and len(spl) != 2:
        K = int(spl[0])
    else:
        K = int(spl[0])*60+int(spl[1])
    mins.append(K)

    video_title.append(html.unescape((request['items'][0]['snippet']['title'])[0:25] + "...")) # 제목 추출
    video_url.append(df['url'][result]) # 영상 id 추출
    video_channel.append(df['channel'][result]) # 영상 해당 채널 추출
    view.append(request['items'][0]['statistics']['viewCount']) # 조회수 추출
    like.append(request['items'][0]['statistics']['likeCount']) # 좋아요 수 추출

    comment_response = yt.commentThreads().list(part='snippet,replies', order='relevance', videoId=df['url'][result], maxResults=2).execute() # 해당 영상 댓글 추출 (관련도 순서)
    for result in comment_response['items']:
        comment = result['snippet']['topLevelComment']['snippet'] # 최상위 주석
        img_comments.append([comment['authorDisplayName'], html.unescape((re.sub('''(<([^>]+)>)''', '', comment['textDisplay']))[0:35]+ "...") , comment['likeCount']]) # 댓글 작성자, 내용, 좋아요 수 추출
# 리스트 평탄화 후 댓글 작성자, 내용, 좋아요 수를 리스트로 정돈
C = (sum(img_comments, []))
for i in range(0,len(C),3):
    img2_comments.append(C[i:i+3])
for i in range(0,len(img2_comments),2):
    comments.append(img2_comments[i:i+2])

final_df = pd.DataFrame([mins, video_title, video_url, video_channel , view, like, comments]).T
final_df.columns=['mins', 'title','url', 'channel', 'view', 'like','comments']

# 저장 경로명은 자신의 상황에 맞게. encoding은 보통 cp949로 하겠지만, 한글이 깨지기 때문에 utf-8로 했슴
# final_df.to_csv(f'/Users/dongsub/Documents/GitHub/REACT-FLASK-APP 복사본/{today}.csv', index=False, encoding='utf-8')
final_df.to_json(f'/Users/dongsub/Documents/GitHub/React-Flask-app 복사본/{today}.json', orient = 'columns', force_ascii=False)

# with open(f'/Users/dongsub/Documents/GitHub/APIproject/{today}.json','w', encoding='utf-8') as file:
#     json.dump(final_df, file, ensure_ascii=False, indent = '\t')
