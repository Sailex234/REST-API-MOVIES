//Export a function that has the sequelize connection and data types as parameters
module.exports = (sequelize, DataTypes) => {         //Define a new model, representing a table in the database. The table columns are defined
    const Movies = sequelize.define('movie', {       //by the object that is given as the second argument.
        id: {                                        //Each key of the object represents a column
            type: DataTypes.INTEGER,                
            primaryKey: true,
            autoIncrement: true,
        },
        title: {                                     
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric:{
                    args: true,
                    msg: "Must be alphabetical and/or alphanumeric"
                },
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric:{
                    args: true,
                    msg: "Must be alphabetical and/or alphanumeric"
                },
                len: {
                    args: [50,255],
                    msg: "Minimum 50 characters"
                },
                notEmpty: true
            }
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt:{
                    args: true,
                    msg: "Must be an integer"
                },
                len: {
                    args: [4,4],
                    msg: "Must be a valid year"
                },
                min: {
                    args: 1896,
                    msg: "There is no record of any film in that year"
                },  
                notEmpty: true
            }
        },
        release: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: {
                    args: true,
                    msg: "Must be a date"
                },
                isAfter: "1896-01-01",
                notEmpty: true
            }
        },
        length: {
            type: DataTypes.TIME,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "Must be alphabetical"
                },
                notEmpty: true,
                len: {
                    args: [4,255],
                    msg: "Minimum 4 characters"
                },
            }
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: {
                    args: true,
                    msg: "Must be alphabetical"
                },
                notEmpty: true,
                len: {
                    args: [3,3],
                    msg: "The international standard ISO 3166-1 alpha-3 should be used for country codes. For example: United States of America = USA"
                },
                isUppercase: {
                    args: true,
                    msg: "Must be in uppercase"
                }
            }
        },
    })

    return Movies;
}