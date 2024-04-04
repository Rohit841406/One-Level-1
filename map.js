
            function initMap() {
                var location = { lat: 28.613939, lng: 77.209023 };
                var map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 8,
                    center: location
                });
                var marker = new google.maps.Marker({
                    position: location,
                    map: map
                });
            }
        
        