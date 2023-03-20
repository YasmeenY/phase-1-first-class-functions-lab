const scuberNames = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (function(scuberNames){
    return (scuberNames.slice(0,2))
});
const returnLastTwoDrivers = (function(scuberNames){
    return (scuberNames.slice(2,4))
});

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(fare){
    return (function(){
        return fare * fare
    })
};

function fareDoubler(fare){
    return fare*2;
};

function fareTripler(fare){
    return fare*3
};
function selectDifferentDrivers(scuberNames,fun){
    return fun(scuberNames);
};