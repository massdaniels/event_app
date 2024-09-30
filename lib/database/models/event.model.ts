import { Document, ObjectId, model, models, Schema } from "mongoose";

export interface IEvent extends Document{
    _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: string;
  imageUrl: string;
  startTimeDate: string;
  endTimeDate: string;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string, name: string }; // Reference to Category
  host: { _id: string, firstname: string, lastname: string }; // Reference to User
}


const EventSchema = new Schema({
    title: { type: String, required: true},
    description: { type: String },
    location: { type: String },
    createdAt: { type: String, default: Date.now },
    imageUrl: { type: String, required: true},
    startTimeDate: { type: String, default: Date.now},
    endTimeDate: { type: String, default: Date.now},
    price: { type: String },
    isFree: { type: Boolean, default: false},
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref:'Category'},
    host: { type: Schema.Types.ObjectId, ref:'User' },
})

const Event = models.Event || model('Event', EventSchema)

export default Event