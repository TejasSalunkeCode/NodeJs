CREATE TABLE `userss` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `userss_id` PRIMARY KEY(`id`),
	CONSTRAINT `userss_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
DROP TABLE `users_table`;