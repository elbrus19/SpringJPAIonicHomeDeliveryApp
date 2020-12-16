import { Component, OnInit } from '@angular/core';
import * as M from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = M.map('map').setView([28.140811, -15.4921491], 10.5);
    var popup = M.popup();

    M.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoic2VyZ2lvcGExMSIsImEiOiJja2libnFvZzIxMTR6MnN0Z3ZvMXU3eGU5In0.2XrcyC4TpekDLFY-pKom8Q'
    }).addTo(map);

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng)
        .openOn(map);
    }

    map.on('click', onMapClick);
  }
}
