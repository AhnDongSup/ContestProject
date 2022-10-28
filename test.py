

# # cur.execute("""CREATE TABLE word (
# #                 name VARCHAR(32)
# #                 )
# #             """)
# cur.execute("INSERT INTO word VALUES ('#쇼츠')")
# k = '엉덩이'
# cur.execute(f"INSERT INTO word VALUES ('#쇼츠')")
# conn.commit()
import sqlite3
conn = sqlite3.connect('words.db')
cur = conn.cursor()
cur.execute("SELECT * FROM word")

L=[]
k = []
x = cur.fetchall()
for i in range(-1,-5,-1):
   recent.append((x[i][0])[0:-3])
