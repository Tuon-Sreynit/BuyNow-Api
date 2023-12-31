const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const crypto = require("crypto");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },

    mobile: {
      type: String,
      required: [true, "Please enter phone"],
      unique: true,
    },

    firstname: {
      type: String,
      required: true,

  },
  lastname: {
      type: String,
      required: true,

  },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minlength: [8, "Minimum password is 8 characters"],
    },

    confirmPassword: {
      type: String,
      validate: {
        //only work on CREATE and SAVE
        validator: function (el) {
          return el === this.password;
        },
        message: "Password are not the same",
      },
    },
    role: {
      type: String,
      default: "customer",
      validate: {
        validator: function (el) {
          if (el != "customer") return false;
        },
        message: "You not allow to define user role",
      },
    },
    profile_img: {
      type: String,
    
    },
  isBlocked: {
      type: Boolean,
      default: false
  },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
    paymentStatus: {
      type: String,
      default: 'pending'
    }
  },
  { timestamps: true }
);

//before save document
userSchema.pre("save", async function (next) {
  //if not modified password do nothing
  if (!this.isModified("password")) return next();

  //hash password
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  //delete password confirm field
  this.confirmPassword = undefined;

  next();
});

// static method to login user
userSchema.statics.login = async function (email, password) {
  try {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  } catch (error) {
    let errors = "";
    console.log("User.login", error.message);

    if (error.message.includes("data and hash arguments required")) {
      errors = "Please enter password";
    } else {
      errors = error;
    }
    throw Error(errors);
  }
};

//create reset token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", userSchema);
module.exports = User;
