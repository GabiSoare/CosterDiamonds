/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

var state = 0;
var country = document.getElementById("country");
var divName = document.getElementById("divName");
var gender = document.getElementById("gender");
var bgd = document.getElementById("bgd");
var prev = document.getElementById("previous");
var next = document.getElementById("next");
var divNP = document.getElementById("divNP");
var email= document.getElementById("email");
var submit= document.getElementById("submit");

prev.style.display ="none";

function n(){
	if(state<4)
		state++;
	switch(state){
		case 0:
			break;
			
		case 1: 
			bgd.style.background = 'url("img/country.png")';
			divName.style.display = 'none';
			prev.style.display ="block";
			country.style.display = 'block';
			
			break;
		case 2: 
			bgd.style.background = 'url("img/gender.png")';
			country.style.display = 'none';
			gender.style.position = "relative";
			gender.style.top = "0px";
			break;	
		case 3: 
			bgd.style.background = 'url("img/email.png")';
			next.style.display = 'none';
			gender.style.position = "absolute";
			gender.style.top = "-50px";
			submit.style.display = email.style.display="block"; 
			break;	
		case 4: 
		if(flag == 1){
			bgd.style.background = 'url("img/thankyou.png")';
			prev.style.display = submit.style.display = email.style.display="none"; 
			setTimeout(exitFromApp,5000);
		}else
			state --;
			break;									
	}
}		
function p(){
	state--;
	switch(state){
		case 0:
			prev.style.display = country.style.display = 'none';
			divName.style.display = 'block';
			break;
				
		case 1: 
			bgd.style.background = 'url("img/country.png")';
			divName.style.display = 'none';
			country.style.display = 'block';
			gender.style.position = "absolute";
			gender.style.top = "-50px";
			break;
		case 2: 
			bgd.style.background = 'url("img/gender.png")';
			country.style.display=submit.style.display = email.style.display="none"; 
			next.style.display = "block";
			gender.style.position = "relative";
			gender.style.top = "0px";
			break;	
		case 3: 
			bgd.style.background = 'url("img/email.png")';
			prev.style.display= next.style.display = 'none';
			submit.style.display = email.style.display="block"; 
			break;	
		case 4: 
	}
}

function exitFromApp(){
	navigator.app.exitApp();
}

























