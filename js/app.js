'use strict'
let randomArr = [];
let workhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalraw = 0;
let totalclo = 0;

console.log('random ---> ', randomArr);

function Salamon(storename, min, max, avg) {
    this.storename = storename;
    this.min = parseInt(min);
    this.max = parseInt(max);
    this.avg = parseInt(avg);
    this.resultrminandmax = [];
    this.randomAvarege = [];
    console.log('random avarge ', this.randomAvarege);
    randomArr.push(this);
    this.totalSum = function () {
        totalraw = 0;
        for (let i = 0; i < this.randomAvarege.length; i++) {
            totalraw += this.randomAvarege[i];
        }
        return totalraw;
    }

}
Salamon.prototype.randomMinandMax = function () {
    for (let i = 0; i < workhours.length; i++) {
        // let result = ;
        this.resultrminandmax.push(Math.floor(Math.random() * (this.max - this.min + 1) + this.min));
    }
}
Salamon.prototype.randomavg = function () {
    for (let j = 0; j < this.resultrminandmax.length; j++) {
        let avg = this.resultrminandmax[j] * this.avg;
        this.randomAvarege.push(avg);

    }
}
Salamon.prototype.render = function () {
    let tbody = document.createElement('tbody');
    bulidtable.appendChild(tbody);
    let trr = document.createElement('tr');
    tbody.appendChild(trr);
    let td = document.createElement('td');
    trr.appendChild(td);
    td.textContent = this.storename;
    for (let i = 0; i < workhours.length; i++) {
        td = document.createElement('td');
        trr.appendChild(td);
        td.textContent = this.randomAvarege[i];

    }
    td = document.createElement('td');
    trr.appendChild(td);
    this.totalSum();
    td.textContent = totalraw;

}

let tablee = document.getElementById('container');
let bulidtable = document.createElement('table');
tablee.appendChild(bulidtable);

function tabelData() {
    let headRaw = document.createElement('thead');
    bulidtable.appendChild(headRaw);
    let tr = document.createElement('tr');
    headRaw.appendChild(tr);
    let thead = document.createElement('th');
    tr.appendChild(thead);
    thead.textContent = 'All data';

    for (let i = 0; i < workhours.length; i++) {
        let t = document.createElement('th');
        tr.appendChild(t);
        t.textContent = workhours[i];
    }
    thead = document.createElement('th');
    tr.appendChild(thead);
    thead.textContent = 'Dalily location total ';
}

function calculatavg() {
    let tfoot = document.createElement('tfoot');
    bulidtable.appendChild(tfoot);
    let trfoot = document.createElement('tr');
    tfoot.appendChild(trfoot);
    let tdfoot = document.createElement('td');
    trfoot.appendChild(tdfoot);
    tdfoot.textContent = 'Total avg';
    let totalSum = 0;
    let avg = 0;
    for (let index = 0; index < workhours.length; index++) {
        totalSum = 0;
        for (let i = 0; i < randomArr.length; i++) {
            totalSum += randomArr[i].randomAvarege[index];

        }
        tdfoot = document.createElement('td');
        trfoot.appendChild(tdfoot);
        tdfoot.textContent = totalSum;
        avg += totalSum;


    }
    tdfoot = document.createElement('td');
    trfoot.appendChild(tdfoot);
    tdfoot.textContent = avg;

}

tabelData();

let seattle = new Salamon('Seattle', 23, 65, 6.3);
// let tokyo = new Salamon('Tokyo', 3, 24, 1.2);
// let dubai = new Salamon('Dubai', 11, 38, 3.7);
// let paris = new Salamon('Paris', 20, 38, 2.3);
// let lima = new Salamon('Lima', 2, 16, 4.6);

seattle.randomMinandMax();
seattle.randomavg();
seattle.render();
// tokyo.randomMinandMax();
// tokyo.randomavg();
// tokyo.render();
// dubai.randomMinandMax();
// dubai.randomavg();
// dubai.render();
// paris.randomMinandMax();
// paris.randomavg();
// paris.render();
// lima.randomMinandMax();
// lima.randomavg();
// lima.render();
calculatavg();

let addcity = document.getElementById('form');
addcity.addEventListener('submit', Addcity);

function Addcity(event) {
    event.preventDefault();
    let path = event.target;
    let cityname = path.citynam.value;
    let minnum = path.Minmum.value;
    let maxnum = path.Maxmum.value;
    let avgnum = path.Avarege.value;

    let newcity = new Salamon(cityname, minnum, maxnum, avgnum);
    newcity.randomMinandMax();
    newcity.randomavg();
    newcity.render();
    bulidtable.deleteTFoot();
    calculatavg();
}