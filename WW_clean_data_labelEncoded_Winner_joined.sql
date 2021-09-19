-- Joining fighers_historicals and fighters_winners table
SELECT *
INTO WW_clean_data_labelencoded_winner
FROM fighters_historicals
INNER JOIN fighters_winners
ON fighters_historicals.fightID = fighters_winners."fightID";
