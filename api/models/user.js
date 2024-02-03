import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,

      unique: true,
    },
    email: {
      type: String,
      required: true,

      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 4,
    },
    photo: {
      type: String,
      default:
        "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1706960907~exp=1706961507~hmac=a2664a8558932313d742a45553973a33436bca306f9ea8ca2bb85a1d25933ee1",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
