# UFC Fight Predictor
###### A predictive model by Julia Cho, Kimberly Murphy, Daniel Urdaneta, and Adrian Zamora 

## Overview:
In this project, our goal is to create a machine learning model which can predict the winner of a UFC welterweight fight using historical fighter data.  We also hope to glean insight into the most successful fighter metrics such as stance and age. 

## Group Communication protocols:
- Group meetings:  Sundays 1-3pm, Monday/Wednesday 7-9pm
- Group communication:  Group text and group message on Slack
- Check off completed tasks in the GoogleDrive To Do list

[Link to GoogleSlide presentation](https://docs.google.com/presentation/d/12g6ZuxoMSZnClPs9yp5jP-XTK2Ll4H4IA8F_h0Qpiwc/edit?usp=sharing)


## Initial Results
For our first analysis, we ran a PCA analysis to see which variables happened to influence the winning odds the most. Our biggest influencer in that category was roughly ~3% so the culmination of all of the statistics is what will determine the most accurate model. We used a linear regression model, deep neural network, and a Random Forest to start with.


## Machine Learning Models 
---
#### Week 1
---
We hope to use this dataset containing fighter data from 1993-2021 to create a machine learning model which can predict which fighter will win in a given fight.  

To begin, we focused only on the welterweight division as it has the most members and fights over the years. We initially approached this by adjusting the dataset such that each fighter of each fight was listed as it's own record(row) and then treated the model as a binary questions (did they win(1) or lose(0)?).   With this idea in mind, we tested a Logistic regression, Random Forest, Neural Network, and Deep Learning models.
 - For the Logistic regression our predictive model had an accuracy score of 50.9%
 - The Random Foreset model returned an accuracy 54.8%
 - Our first attempt using a Neural Network model (using relu/sigmoid) returned an accuracy score of 49%.  After using a loop to test 60 different trials, the best model was able to predict with an accuracy of 66.6%.  This model had the following hyperparameters:
 
   - {'activation': 'tanh', 'first_units': 9, 'num_layers': 3, 'units_0': 5, 'units_1': 1, 'units_2': 3, 'units_3': 9, 'units_4': 9, 'units_5': 1, 'tuner/epochs': 20,  'tuner/initial_epoch': 0, 'tuner/bracket': 0, 'tuner/round': 0}

 - Finally, the Deep learing model returned an accuracy of 52.6%

**After further consideration**, we determined this would not be the optimal way to produce the predictive model we had initially envisioned which would predict the winner between two fighters.  So, we went back to using the original clean dataset with both fighters in each fight labeled as red or blue and listed within the same record of the database(Fight_data_Random_Forest) and connected it to the SQL database table using SQLAlchemy.  Then we tested a Random Forest model to predict if the blue fighter would be the winner.  We were able to achieve **58% accuracy** using this model.

---
#### Week 2
---
The original dataset was adjusted such that it only included fighter statistics and excluded any information specific to the bout such as "number of strikes landed".  This was decided because the model would not be as useful for future predictions if that information were used to train it.  

The different models then used the LabelEncoded "Winner" column as the target and the remaining information (sans fighter name) for each fighter as the features.
 - Total time fought(seconds)
 - Total rounds fought
 - Total title bouts
 - Current win streak
 - Current lose streak
 - Longest win streak
 - Total wins
 - Total losses
 - Total draws
 - Total wins by Decision Majority
 - Total wins by Decision Split
 - Total wins by Decision Unanimous
 - Total wins by KO/TKO
 - Total wins by Submission
 - Total wins by Doctor Stoppage
 - Fighter height
 - Fighter reach
 - Fighter weight

Of the 112 fights, 80% were assigned to the training set and 20% assigned to the test set.

The following models were trained and tested with the new feature designations:
 - **Logistic Regression – 65% accuracy**
   - benefits:  Used for classification problems, uses a sigmoid function to determine class label AND provides a probability, useful because we can determine WHICH Features are most important to the model 
 - **Boosting Methods – 65% accuracy**
   - benefits:  Similar to random forest except each tree is built sequentially, taking information from the previous tree thus making each successive tree better
 - **Support Vector Machines - 59% accuracy**
   - benefits: Used for classification of small or medium sized complex (lots of features) datasets
 - **Decision Trees - 41% accuracy**
   -benefits:  Used for classification problems, analyzes possible features and decides which features best split the data to that different data points go to one side of the split while minimizing error
 - **Random Forest - 43% accuracy**
   -benefits:  Uses many learners to enhance the performance of any single one (an ensemble of many decision trees)
 - **Basic Neural Network < 35% accuracy**
 - **Deep Neural Network <30% accuracy**


