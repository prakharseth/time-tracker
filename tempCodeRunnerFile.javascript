function testhack()
{
    var test=[];
    for(var z=0;z<5;z++)
        test[z]=function(){ return z;};
    return test;
}
var test =testhack();
test[4]()
