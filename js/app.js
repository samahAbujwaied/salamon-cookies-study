'use strict'
let randomarr = [];
let workhours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm',
    '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let totalraw = 0;
let totalclo = 0;
function Salamon(storename, min, max, avg) {
    this.storename = storename;
    this.min = parseInt(min);
    this.max = parseInt(max);
    this.avg = parseInt(avg) ;
    this.resultrminandmax = [];
    this.randomavareg = [];
    randomarr.push(this);
     this.sumtotal= function(){
        totalraw=0;
        for (let i = 0; i < this.randomavareg.length; i++) {
            totalraw+=this.randomavareg[i];     
        }
        return totalraw;
    }
  
}
Salamon.prototype.randomMinandMax = function () {
    for (let i = 0; i < workhours.length; i++) {
        let result = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        this.resultrminandmax.push(result);
    }
}
Salamon.prototype.randomavg = function () {
    for (let j = 0; j < this.resultrminandmax.length; j++) {
        let avg = this.resultrminandmax[j] * this.avg;
        this.randomavareg.push(avg);
        
    }
}
let tablee = document.getElementById('container');
let bulidtable = document.createElement('table');
tablee.appendChild(bulidtable);

function tablefun() {
    let headraw = document.createElement('thead');
    bulidtable.appendChild(headraw);
    let tr = document.createElement('tr');
    headraw.appendChild(tr);
    let thead = document.createElement('th');
    tr.appendChild(thead);
    thead.textContent = '';

    for (let i = 0; i < workhours.length; i++) {
        let t = document.createElement('th');
        tr.appendChild(t);
        t.textContent = workhours[i];
    }
    thead = document.createElement('th');
    tr.appendChild(thead);
    thead.textContent = 'Dalily location total ';
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
        td.textContent = this.randomavareg[i];

    }
    td = document.createElement('td');
    trr.appendChild(td);
    this.sumtotal();
    td.textContent = totalraw;
    
}
function calculatavg(){
    let tfoot = document.createElement('tfoot');
    bulidtable.appendChild(tfoot);
    let trfoot = document.createElement('tr');
    tfoot.appendChild(trfoot);
    let tdfoot = document.createElement('td');
    trfoot.appendChild(tdfoot);
    tdfoot.textContent = 'Total avg';
    let sumtotal = 0;
      let avg = 0;
  for (let index = 0; index < workhours.length; index++) {
    sumtotal = 0;
    for (let i = 0; i < randomarr.length; i++) {
       sumtotal+=randomarr[i].randomavareg[index];
        
    }
    tdfoot = document.createElement('td');
    trfoot.appendChild(tdfoot);
    tdfoot.textContent=sumtotal;
    avg+=sumtotal;
    
      
  }
  tdfoot = document.createElement('td');
  trfoot.appendChild(tdfoot);
  tdfoot.textContent=avg;

}

tablefun();


let seattle = new Salamon('Seattle', 23, 65, 6.3);
let tokyo = new Salamon('Tokyo', 3, 24, 1.2);
let dubai = new Salamon('Dubai', 11, 38, 3.7);
let paris = new Salamon('Paris', 20, 38, 2.3);
let lima = new Salamon('Lima', 2, 16, 4.6);

seattle.randomMinandMax();
seattle.randomavg();
seattle.render();
tokyo.randomMinandMax();
tokyo.randomavg();
tokyo.render();
dubai.randomMinandMax();
dubai.randomavg();
dubai.render();
paris.randomMinandMax();
paris.randomavg();
paris.render();
lima.randomMinandMax();
lima.randomavg();
lima.render();
calculatavg();

let addcity = document.getElementById('form');
addcity.addEventListener('submit',Addcity);
function Addcity(event){
    event.preventDefault();
let path = event.target;
let cityname = path.citynam.value;
let minnum = path.Minmum.value;
let maxnum = path.Maxmum.value;
let avgnum = path.Avarege.value;

let newcity = new Salamon(cityname,minnum,maxnum,avgnum);
newcity.randomMinandMax();
newcity.randomavg();
newcity.render();
bulidtable.deleteTFoot();
calculatavg();
}