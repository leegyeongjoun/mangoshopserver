// 테이블 만든것
module.exports = (sequelize, DataTypes) => {
        //테이블명             정의                       
    const product = sequelize.define("Product", {
        name:{  
            type: DataTypes.STRING(20),//타입과 글자수
            allowNull:false, //null값이면 안되는 것 무조건 들어와야 하는 것
        },
        price:{
            type: DataTypes.INTEGER(10),//타입과 글자수
            allowNull:false, //null값이면 안되는 것 무조건 들어와야 하는 것
        },
        seller:{
            type: DataTypes.STRING(30),//타입과 글자수
            allowNull:false, //null값이면 안되는 것 무조건 들어와야 하는 것
        },
        description:{
            type: DataTypes.STRING(300),//타입과 글자수
            allowNull:false, //null값이면 안되는 것 무조건 들어와야 하는 것
        },
        imageUrl:{
            type: DataTypes.STRING(300),//타입과 글자수
            allowNull:true, //null값이면 안되는 것 무조건 들어와야 하는 것
        },
        soldout:{
            type: DataTypes.INTEGER(1),//타입과 글자수
            allowNull:false,
            defaultValue:0,
        }
    });
    return product;
}
//noder server.js를 하면 id와 key값 createdAt, updateAt 생성된다.