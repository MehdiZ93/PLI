CREATE TABLE user(
        id             int (11) Auto_increment  NOT NULL ,
        lastname       Varchar (50) ,
        firstname      Varchar (50) ,
        email          Varchar (50) ,
        password       Varchar (255) ,
        tel            int (25) ,
        country        Varchar (50) ,
        picture        Varchar (255) ,
        birthday       Date ,
        description    Text ,
        active         Bool ,
        create_date    Datetime ,
        update_date    Datetime ,
        desactive_date Datetime ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;

CREATE TABLE language(
        id       int (11) Auto_increment  NOT NULL ,
        language Varchar (50) ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;

CREATE TABLE ad(
        id          int (11) Auto_increment  NOT NULL ,
        title       Varchar (150) ,
        description Text ,
        country     Varchar (50) ,
        nb_spot     Int ,
        create_date Datetime ,
        update_date Datetime ,
        author      Int ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;

CREATE TABLE hobby(
        id   int (11) Auto_increment  NOT NULL ,
        name Varchar (50) ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;

CREATE TABLE user_languages(
        id_user     Int NOT NULL ,
        id_language Int NOT NULL ,
        PRIMARY KEY (id_user ,id_language )
)ENGINE=InnoDB;

CREATE TABLE inscription(
        confirm Bool ,
        id_user Int NOT NULL ,
        id_ad   Int NOT NULL ,
        PRIMARY KEY (id_user ,id_ad )
)ENGINE=InnoDB;

CREATE TABLE friend(
        id_friend Int NOT NULL ,
        id_user   Int NOT NULL ,
        PRIMARY KEY (id_friend ,id_user )
)ENGINE=InnoDB;

CREATE TABLE user_hobbies(
        id_user  Int NOT NULL ,
        id_hobby Int NOT NULL ,
        PRIMARY KEY (id_user ,id_hobby )
)ENGINE=InnoDB;

CREATE TABLE comment(
        body        Text ,
        create_date Datetime ,
        id_user     Int NOT NULL ,
        id_ad       Int NOT NULL ,
        PRIMARY KEY (id_user ,id_ad )
)ENGINE=InnoDB;

CREATE TABLE user_likes(
        mark    Int ,
        id_dest Int NOT NULL ,
        id_user Int NOT NULL ,
        PRIMARY KEY (id_dest ,id_user )
)ENGINE=InnoDB;

CREATE TABLE message(
        body    Text ,
        create_date Datetime ,
        id_dest Int NOT NULL ,
        id_user Int NOT NULL ,
        PRIMARY KEY (id_dest ,id_user )
)ENGINE=InnoDB;

ALTER TABLE ad ADD CONSTRAINT FK_ad_id_User FOREIGN KEY (author) REFERENCES User(id);
ALTER TABLE user_languages ADD CONSTRAINT FK_user_languages_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE user_languages ADD CONSTRAINT FK_user_languages_id_language FOREIGN KEY (id_language) REFERENCES language(id);
ALTER TABLE inscription ADD CONSTRAINT FK_inscription_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE inscription ADD CONSTRAINT FK_inscription_id_ad FOREIGN KEY (id_ad) REFERENCES ad(id);
ALTER TABLE friend ADD CONSTRAINT FK_friend_id_friend FOREIGN KEY (id_friend) REFERENCES User(id);
ALTER TABLE friend ADD CONSTRAINT FK_friend_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE user_hobbies ADD CONSTRAINT FK_user_hobbies_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE user_hobbies ADD CONSTRAINT FK_user_hobbies_id_hobby FOREIGN KEY (id_hobby) REFERENCES hobby(id);
ALTER TABLE comment ADD CONSTRAINT FK_comment_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE comment ADD CONSTRAINT FK_comment_id_ad FOREIGN KEY (id_ad) REFERENCES ad(id);
ALTER TABLE user_likes ADD CONSTRAINT FK_like_id_dest FOREIGN KEY (id_dest) REFERENCES User(id);
ALTER TABLE user_likes ADD CONSTRAINT FK_like_id_user FOREIGN KEY (id_user) REFERENCES User(id);
ALTER TABLE message ADD CONSTRAINT FK_message_id_dest FOREIGN KEY (id_dest) REFERENCES User(id);
ALTER TABLE message ADD CONSTRAINT FK_message_id_user FOREIGN KEY (id_user) REFERENCES User(id);
