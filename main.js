//CALLBACK
function mul(a, b) {
    console.log("a*b isequal to", a * b);
}
function calculation(a, b, mul) {
    mul(a, b);
}
calculation(2, 5, mul);
//SET TIMEOUT
var slot = function () {
    console.log("Iam a student of thursday slot");
};
setTimeout(slot, 3000);
// ANOTHER WAY OF WRITTING  SET TIMEOUT
setTimeout(function () {
    console.log("I am a student of GIAIC");
}, 4000);
//CALL BACK HELL
// to understand call back hell first we make simple function
function Iphoneshop1(modelnumber) {
    setTimeout(function () {
        console.log("mobile modelnumber", modelnumber);
    }, 5000);
}
Iphoneshop1(6); //5s
Iphoneshop1(7); //5s
Iphoneshop1(8); //5s
//at that time we received all 3 modelnumber at a time without any delay
//lets suppose we want mobile model number one bye one with delay of 5 sec here we use call back
function Iphoneshop2(modelnumber, getnextmodelnumber) {
    setTimeout(function () {
        console.log("mobile modelnumber", modelnumber);
        if (getnextmodelnumber) {
            getnextmodelnumber();
        }
    }, 5000);
}
Iphoneshop2(6, function () {
    console.log("This is the model number");
    console.log("Getting new modelnumber");
    Iphoneshop2(7, function () {
        console.log("This is the model number");
        console.log("Getting new modelnumber");
        Iphoneshop2(8, function () {
            console.log("This is the model number");
            console.log("Getting new modelnumber");
            Iphoneshop2(10, function () {
                console.log("This is the model number");
                console.log("Getting new modelnumber");
                Iphoneshop2(15, function () {
                    console.log("This model is included in the most recent model.");
                });
            });
        });
    });
});
