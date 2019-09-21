import React, { Component } from "react";
import OlMap from "ol/Map";
import { fromLonLat, toLonLat } from "ol/proj";
import OlView from "ol/View";
import OlLayerTile from "ol/layer/Tile";
import OlSourceOSM from "ol/source/OSM";
import Overlay from "ol/Overlay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "ol/ol.css";
class Map1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lotLat: []
    };
    this.container = React.createRef();
  }
  componentDidMount() {
    //create an overlayer
    const overlay = new Overlay({
      stopEvent: true,
      positioning: "center-center",
      position: fromLonLat([10.1441, 36.8061]),
      element: this.container.current
    });

    this.overL = overlay;

    this.olmap = new OlMap({
      target: "map-id",
      layers: [
        new OlLayerTile({
          source: new OlSourceOSM()
        })
      ],
      overlays: [overlay],

      view: new OlView({
        center: fromLonLat([10.1441, 36.8061]),
        zoom: 15
      })
    });
  }

  render() {
    return (
      <>
        <div
          id="map-id"
          style={{ width: "100%", backgroundColor: "#22aeff" }}
        />
        <div
          ref={this.container}
          draggable={false}
          style={{ position: "relative", width: "1px", height: "1px" }}
        >
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="lg"
            style={{
              color: "#22aeff",
              position: "absolute",
              right: "-18px",
              bottom: "-6px",
              width: "32px"
            }}
          />
        </div>
      </>
    );
  }
}

export default Map1;
