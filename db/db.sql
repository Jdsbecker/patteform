SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- ------------------------
-- Table: actualite
-- ------------------------
CREATE TABLE `actualite` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `titre` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `img` VARCHAR(255) DEFAULT NULL, -- URL vers Cloudinary
  `date` DATE DEFAULT NULL,
  `alerte` BOOLEAN DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX idx_date (`date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: animaux_a_adopter
-- ------------------------
CREATE TABLE `animaux_a_adopter` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) DEFAULT NULL,
  `espece` ENUM('chien','chat','autre') DEFAULT NULL,
  `autre` BOOLEAN DEFAULT NULL,
  `race` VARCHAR(255) DEFAULT NULL,
  `prix` INT DEFAULT NULL,
  `sexe` ENUM('male','femelle') DEFAULT NULL,
  `age` INT DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `enfant` BOOLEAN DEFAULT NULL,
  `chat` BOOLEAN DEFAULT NULL,
  `chien` BOOLEAN DEFAULT NULL,
  `categoriser` ENUM('aucune','1','2') DEFAULT NULL,
  `sos` BOOLEAN DEFAULT NULL,
  `date_arriver` DATE DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX idx_espece (`espece`),
  INDEX idx_sos (`sos`),
  INDEX idx_date_arriver (`date_arriver`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: animaux_adopter
-- ------------------------
CREATE TABLE `animaux_adopter` (
  `id` INT(11),
  `nom` VARCHAR(255) DEFAULT NULL,
  `age` INT DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `animaux_adopter_ibfk_1`
    FOREIGN KEY (`id`) REFERENCES `animaux_a_adopter` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: caractere_chiens
-- ------------------------
CREATE TABLE `caractere_chiens` (
  `id` INT(11) DEFAULT NULL,
  `caractere` VARCHAR(255) DEFAULT NULL,
  KEY `id` (`id`),
  CONSTRAINT `caractere_chiens_ibfk_1`
    FOREIGN KEY (`id`) REFERENCES `animaux_a_adopter` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: equipe
-- ------------------------
CREATE TABLE `equipe` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) DEFAULT NULL,
  `prenom` VARCHAR(255) DEFAULT NULL,
  `statut` VARCHAR(255) DEFAULT NULL,
  `benevole` BOOLEAN DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: photo_chiens
-- ------------------------
CREATE TABLE `photo_chiens` (
  `img_id` INT(11) NOT NULL AUTO_INCREMENT,
  `id` INT(11) DEFAULT NULL,
  `img` VARCHAR(255) DEFAULT NULL, -- URL vers Cloudinary
  PRIMARY KEY (`img_id`),
  KEY `id` (`id`),
  CONSTRAINT `photo_chiens_ibfk_1`
    FOREIGN KEY (`id`) REFERENCES `animaux_adopter` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ------------------------
-- Table: users
-- ------------------------
CREATE TABLE `users` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `admin` BOOLEAN NOT NULL DEFAULT FALSE,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

COMMIT;