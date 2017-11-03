
import urllib
import http.client
import time
import random
from newrelic_api import KeyTransactions




#newrelics_base_address='api.newrelic.com/v2/key_transactions.json'
#newrelics_transaction_name='TimeSheet.getsheet'


import urllib
import http.client
import time
import random
from newrelic_api import KeyTransactions




#newrelics_base_address='api.newrelic.com/v2/key_transactions.json'
#newrelics_transaction_name='TimeSheet.getsheet'


api_key='5da816d3-cce4-4877-a168-f0cc2a3abf32'
status_page_id='srbthl63zrxm'
status_metric_id='h8r6k6dz2dvz'
status_api_base='api.statuspage.io'



total_points = int(60 / 5 * 24)
for i in range(total_points):
  transaction=KeyTransactions('41081c0ab486a8eb4bb676927eccab52176bd6c4b7c3bef')
  response=transaction.list(filter_name='TimeSheet.getsheet')
  responsetime=response['key_transactions'][0]['application_summary']['response_time']
  timestamp=response['key_transactions'][0]['last_reported_at']
  timestamp=str(timestamp).split('T')[1]
  timestamp=str(timestamp).split('+')[0]
  list=str(timestamp).split(':')
  timestamp=28*24*60*60-int(list[0])*60*60+int(list[1])*60+int(list[2])
  ts = timestamp - (i * 5 * 60)
  #value = random.randint(0, 99)
  value=responsetime
  params = urllib.parse.urlencode({'data[timestamp]': ts, 'data[value]': value})
  headers = {"Content-Type": "application/x-www-form-urlencoded", "Authorization": "OAuth " + api_key}
  conn = http.client.HTTPSConnection(status_api_base)
  conn.request("POST", "/v1/pages/" + status_page_id + "/metrics/" + status_metric_id + "/data.json", params, headers)
  response = conn.getresponse()
  print('Submitted point' + str(i + 1) + " of " + str(total_points))
  time.sleep(1)
  
api_key='5da816d3-cce4-4877-a168-f0cc2a3abf32'
status_page_id='srbthl63zrxm'
status_metric_id='h8r6k6dz2dvz'
status_api_base='api.statuspage.io'



total_points = int(60 / 5 * 24)
for i in range(total_points):
  transaction=KeyTransactions('41081c0ab486a8eb4bb676927eccab52176bd6c4b7c3bef')
  response=transaction.list(filter_name='TimeSheet.getsheet')
  responsetime=response['key_transactions'][0]['application_summary']['response_time']
  timestamp=response['key_transactions'][0]['last_reported_at']
  timestamp=str(timestamp).split('T')[1]
  timestamp=str(timestamp).split('+')[0]
  list=str(timestamp).split(':')
  timestamp=28*24*60*60-int(list[0])*60*60+int(list[1])*60+int(list[2])
  ts = timestamp - (i * 5 * 60)
  #value = random.randint(0, 99)
  value=responsetime
  params = urllib.parse.urlencode({'data[timestamp]': ts, 'data[value]': value})
  headers = {"Content-Type": "application/x-www-form-urlencoded", "Authorization": "OAuth " + api_key}
  conn = http.client.HTTPSConnection(status_api_base)
  conn.request("POST", "/v1/pages/" + status_page_id + "/metrics/" + status_metric_id + "/data.json", params, headers)
  response = conn.getresponse()
  print('Submitted point' + str(i + 1) + " of " + str(total_points))
  time.sleep(1)
  