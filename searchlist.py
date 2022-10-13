from googleapiclient.discovery import build
import pandas as pd
from urllib import parse
import datetime
from pytube import YouTube
key = 'AIzaSyB4kIuWFdytMzw5nYjzmYpzkqYl5KNbRs0'
api_name = "youtube"
api_version_ = "v3"
yt = build(api_name, api_version_, developerKey=key)

keywords = ["#쇼츠 무한도전"]
today = datetime.date.today()
num_of_result = 15

ls = [] # 검색 결과를 넣을 빈 리스트 생성
print(yt)
# 검색 키워드 하나 하나에 대해 검색 반복
for keyword in keywords:
    # search().list()에 대해서는 https://developers.google.com/youtube/v3/docs/search/list?hl=ko 참고
    results = yt.search().list(
        q=keyword, # 검색어
        order='viewCount', # 검색어와 연관성 순서대로. date, rating, title 등 사용 가능
        type='video',
        part='snippet', # id 또는 snippet을 쓸 수 있는데, id엔 정보라고 할 게 없음 --;
        # publishedAfter=f'{today}T00:00:00Z',
        videoDuration='short',
        maxResults=num_of_result).execute()
        
    # results는 dictionary 형태로 출력되는데, 요건 아래 본문에 다시 다루겠음
    # print(results['items'])
    for result in results['items']:
        # 한글 깨질까봐 parse.unquote를 거침
        title = parse.unquote(result['snippet']['title'])
        channel = parse.unquote(result['snippet']['channelTitle'])
        appendix = result['id']['videoId']
        url = 'https://www.youtube.com/watch?v=' + appendix
        # ytt = YouTube(url)
        # print(ytt.length)
        ls.append([keyword, title, url, channel])
        

# 데이터는 ls를 넣고, 컬럼 명칭은 keyword, title, url, channel로 함
df = pd.DataFrame(ls, columns=['keyword', 'title', 'url', 'channel'])

# 저장 경로명은 자신의 상황에 맞게. encoding은 보통 cp949로 하겠지만, 한글이 깨지기 때문에 utf-8로 했슴
df.to_csv(f'/Users/dongsub/Documents/GitHub/APIproject/{today}.csv', index=False, encoding='utf-8')