import pandas as pd

# readind the data form file
df=pd.read_excel("assignment data.xlsx") 

# conver the data into json
dataJson =df.to_json(orient="records")

# saving the file
with open('data.json','w') as json_file:
    json_file.write(dataJson)

print("Data converted into JSON")