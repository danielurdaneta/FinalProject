-- Creating v5 of individual fighter data table for Final Project
CREATE TABLE individual_fighter_clean_data_v5 (
	"fighter" VARCHAR(40),
	"total_time_fought(seconds)" FLOAT,
	"total_rounds_fought" FLOAT,
	"total_title_bouts" FLOAT,
	"current_win_streak" FLOAT,
	"current_lose_streak" FLOAT,
	"longest_win_streak" FLOAT,
	"wins" FLOAT,
	"losses" FLOAT,
	"draw" FLOAT,
	"win_by_Decision_Majority" FLOAT,
	"win_by_Decision_Spli" FLOAT,
	"win_by_Decision_Unanimous" FLOAT,
	"win_by_KO/TKO" FLOAT,
	"win_by_Submission" FLOAT,
	"win_by_TKO_Doctor_Stoppage" FLOAT,
	"Stance" VARCHAR(40),
	"Height_cms" FLOAT,
	"Reach_cms" FLOAT,
	"Weight_lbs" FLOAT,
	"age" FLOAT
);