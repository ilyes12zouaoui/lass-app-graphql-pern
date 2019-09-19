import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faCalendarAlt,
  faVenusMars,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import style from "./Informations.module.css";
const Informations = ({
  isOwner = false,
  email,
  firstName,
  lastName,
  telephone,
  description,
  sexe,
  address,
  birthDate
}) => {
  return (
    <div>
      <h1 className="color-blue">{`${firstName} ${lastName}`}</h1>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon icon={faEnvelope} className="color-blue" size="lg" />
        <span className={style["profile-information-lane-span"]}>{email}</span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className="color-blue"
          size="lg"
        />
        <span className={style["profile-information-lane-span"]}>
          {" "}
          {moment(birthDate).format("YYYY/MM/DD")}
        </span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon icon={faVenusMars} className="color-blue" size="lg" />
        <span className={style["profile-information-lane-span"]}>
          {" "}
          {sexe.toLowerCase()}
        </span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon icon={faPhone} className="color-blue" size="lg" />
        <span className={style["profile-information-lane-span"]}>
          {telephone ? telephone : "not provided by the user"}
        </span>
      </div>
      <div className={style["profile-information-lane"]}>
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          className="color-blue"
          size="lg"
        />
        <span className={style["profile-information-lane-span"]}>
          {address ? address : "not provided by the user"}
        </span>
      </div>
    </div>
  );
};
export default Informations;
