CREATE TABLE `blogs` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`content` text,
	`image` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP,
	`author` text,
	`description` text
);
