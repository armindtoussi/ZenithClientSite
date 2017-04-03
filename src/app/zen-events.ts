
export interface ZenEvents {
  eventId:           number;
  eventFromDateTime: string;
  eventToDateTime:   string;
  enteredByUsername: string;
  activityId:        number;
  activity:          Activity;
  creationDate:      string;
  isActive:          boolean; 
}

export interface Activity {

    activityId:          number;
    activityDescription: string;
    creationDate:        string;

}