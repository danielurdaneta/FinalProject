# UFC Fight Predictor
###### A predictive model by Julia Cho, Kimberly Murphy, Daniel Urdaneta, and Adrian Zamora 

## Overview:
In this project, our goal is to create a machine learning model which can predict the winner of a UFC welterweight fight using historical fighter data.  We also hope to glean insight into the most successful fighter metrics such as stance and age. 

## Group Communication protocols:
- Group meetings:  Sundays 1-3pm, Monday/Wednesday 7-9pm
- Group communication:  Group text and group message on Slack

[Link to GoogleSlide presentation](https://docs.google.com/presentation/d/12g6ZuxoMSZnClPs9yp5jP-XTK2Ll4H4IA8F_h0Qpiwc/edit?usp=sharing)


## Initial Results
For our first analysis, we ran a PCA analysis to see which variables happened to influence the winning odds the most. Our biggest influencer in that category was roughly ~3% so the culmination of all of the statistics is what will determine the most accurate model. We used a linear regression model, deep neural network, and a Random Forest to start with.


### Preliminary Machine Learning Models
We hope to use this dataset containing fighter data from 1993-2021 to create a machine learning model which can predict which fighter will win in a given fight.  To beging, we are focusing only on the welterweight division as it has the most members and fights over the years. Since this is a binary questions (win/lose) we are testing a Logistic regression, Random Forest, Neural Network, and Deep Learning models.
We tested to see if there was any significant difference between using the entire data set or only the historical stats for each fighter.  There did not appear to be any difference.  
 - For the Logistic regression our predictive model had an accuracy score of 50.9%
 - The Random Foreset model returned an accuracy 54.8%
 - Our first attempt using a Neural Network model (using relu/sigmoid) returned an accuracy score of 49%.  After using a loop to test 60 different trials, the best model was able to predict with an accuracy of 66.6%.  This model had the following hyperparameters:
 
{'activation': 'tanh', 'first_units': 9, 'num_layers': 3, 'units_0': 5, 'units_1': 1, 'units_2': 3, 'units_3': 9, 'units_4': 9, 'units_5': 1, 'tuner/epochs': 20,  'tuner/initial_epoch': 0, 'tuner/bracket': 0, 'tuner/round': 0}

 - Finally, the Deep learing model returned an accuracy of 52.6%

