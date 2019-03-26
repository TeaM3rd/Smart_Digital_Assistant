
# SMART DIGITAL ASSISTANT 
 Team Members
1. Akksaya Rajasri.G.P(15csa05)
2. Durga Devi.S(15csa17)
3. Gracelin.S(15csa20)

# ABSTRACT:
The project “Smart Digital Assistant” is about generating data from several vehicles and store them in simple storage service(S3) and the data are fetched using lambda function and through interaction model alexa tells the data to the user when required.

# MODULES:
# MODULE-1 (Durga Devi.S)<br>
# Data Collection
Benchmark data's regarding tank capacities and mileage is collected from kaggle.com
# Cleaning data
Data's are cleaned in ms excel. By using trim(text) function whitespaces are cleared in selected row or column.
select a whole data and click conditional formatting---->duplicates, then it will highlighted the repeated data's. Then go to data option, choose remove duplicates.
# Load to s3 and IAM role.
In s3 services created a bucket(folder), upload a cleaned data and gave a permissions. In s3 we can create 'n' number of folders and can upload upto 5tb data.
In IAM (identity access management) create a user and granting permissions.
# MODULE-2 (Gracelin.S)<br>
# Data’s redirect to js code 
data are fetched into lambda using js.
# Integrating js code into Lambda fuction
created two intents and called them using fuctions and trained alexa using sdk.
# MODULE-3 (Akksaya Rajasri.G.P)<br>
# Connecting Lambda function and Alexa developers console And test them.
created invocation name,created two intents,creted slot and slot types and connected the endpoints.

# PROPOSED SYSTEM:
Our proposed system reduces them by automating the whole complete process using a voice user interface (Amazon alexa echo dot) which will be much faster than the Existing system, also reduces the time and man power consumption. In our system user ask tank capacity through voice user interface (mic). User request sends to backend by connected endpoint, it will fetch the data from database and triggred to lambda. Lambda return information to the user.

# ADVANTAGES:
Minimal man power consumption,
Minimal time consumption,
Computational errors and mistakes are minimized.
  
# FUTURE ENHANCEMENT:
Manual work has to be reduced,
Accuracy,
Result to be received very quickly,
To speed up the operation.

# Demo Video

https://www.youtube.com/watch?v=6Xx8spsi07M

# Project Status
 Completed(100%)



 
