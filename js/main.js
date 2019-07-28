//  To use the google maps Api you need to go to

//  https://developers.google.com/maps/documentation/javascript/tutorial

// -- Then login with your email account
// -- Select Maps then Create a Project
// Choose "Console" then "Maps Javascript APi"
// Click "Enable"
// Click "Credentials" then "Create APi key"
// Project Name: myTestProject
// Ur API key is AIzaSyB3S4I4dPoMI8HjTrhXIVsN0_b3dW-gdrQ

function initMap() {
  // Create Map params / options
  var options = {
    // the default display level in google maps is 8. NB: 8 & < zooms out and 8 & > zooms in lol
    zoom: 11,

    // latitude and longitude of Tobago (dont forget the "-" for the lng)
    center: { lat: 11.2337, lng: -60.6989 }
  };
  /*
  // cameron location
  var camOption = {
    // the default display level in google maps is 8. NB: 8 & < zooms out and 8 & > zooms in lol
    zoom: 16,

    // latitude and longitude of Tobago (dont forget the "-" for the lng)
    center: { lat: 45.01511, lng: -74.77098 }
  };
 */
  // create the map with the params we set. This pulls the options and the map div we made earlier
  var map = new google.maps.Map(document.getElementById("map"), options); // camOptions

  //  Click EVENT
  // Listen for click on map to add a marker there lol (not necessary for what our project needs)
  google.maps.event.addListener(map, "click", function(event) {
    // Add a temporary marker
    addMarker({ coords: event.latlng });
  });

  /*

    // Add the Marker that will be placed on the map
    var marker = new google.maps.Marker({
      position: { lat: 11.267, lng: -60.7 }, // where you want the marker?
      map: map, // where is the map that the marker must go on?

      icon:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
    });

    // Add Content / an info window to the Marker
    var infoWindow = new google.maps.infoWindow({
      content: "<h2>~ Mount Dillon ~</h2>"
    });

    // Add a listener to the marker that will trigger the infoWindow to display
    marker.addListener("click", function() {
      infoWindow.open(map, marker);
    });

    */

  // Add Multiple markers

  // Make a Marker Array with coordinates iconImages and content
  var markers = [
    {
      coords: { lat: 11.267, lng: -60.7 },
      iconImage: "./markers/025-ico-paragliding.png"
      // content: "<h2>~ Mount Dillon ~</h2>"
    },

    {
      coords: { lat: 11.1565, lng: -60.8402 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
      // content: null //"<h2>~ Store Bay ~</h2>"
    },

    {
      coords: { lat: 11.1799, lng: -60.7592 },
      // content: "<h2>~ Signal Hill ~</h2>",
      iconImage: "./markers/014-ico-mountain.png"
    },

    {
      coords: { lat: 11.2919, lng: -60.6728 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
      // content: "<h2> Englishman's Bay </h2>"
    }
  ];

  // Call the addMarker function effectively
  // Loop through the markers Array
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  /*
    // Call the addMarker function
    addMarker({
      coords: { lat: 11.267, lng: -60.7 },
      iconImage: null
      // content: "<h2>~ Mount Dillon ~</h2>"
    }); // Mount Dillon

    addMarker({
      coords: { lat: 11.1565, lng: -60.8402 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
      // content: null //"<h2>~ Store Bay ~</h2>"
    }); // Store Bay

    addMarker({
      coords: { lat: 11.1799, lng: -60.7592 },
      // content: "<h2>~ Signal Hill ~</h2>",
      iconImage: null
    }); // Signal Hill

    addMarker({
      coords: { lat: 11.2919, lng: -60.6728 },
      iconImage:
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" // this is the location for the icon online
      // content: "<h2> Englishman's Bay </h2>"
    }); // Englishman's Bay

    */

  /*------------------------------------------------------------------ */
  // add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords, // where you want the marker?
      map: map // where is the map that the marker must go on?

      // icon: props.iconImage // Set the icon image
    });

    // Check for the custom Icon
    if (props.iconImage) {
      // Set the icon image
      marker.setIcon(props.iconImage);
    }

    // Check for Content
    if (props.content) {
      // Add Content / an info window to the Marker
      var infoWindow = new google.maps.infoWindow({
        content: props.content
      });

      // Add a listener to the marker that will trigger the infoWindow to display
      marker.addListener("click", function() {
        infoWindow.open(map, marker);
      });
    }
  }
}
