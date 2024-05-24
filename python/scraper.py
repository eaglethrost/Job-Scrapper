import requests

from bs4 import BeautifulSoup

url = "https://www.reddit.com/r/unsw/comments/wvr006/comp1531/"

response = requests.get(url)
soup = BeautifulSoup(response.content, 'html.parser')

print(soup.prettify())
