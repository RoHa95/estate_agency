export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "نام و نام خانوادگی را وارد کنید";
  } else {
    delete errors.name;
  }

  if (!data.phoneNumber) {
    errors.phoneNumber = "شماره همراه را وارد کنید";
  } else if (data.phoneNumber.length < 11) {
    errors.phoneNumber = "لطفا به صورت کامل وارد کنید";
  } else {
    delete errors.phoneNumber;
  }

  if (!data.password) {
    errors.password = "گذرواژه را وارد کنید";
  } else if (data.password.length < 8) {
    errors.password = "گذرواژه نمی تواند کمتر از 8 کاراکتر باشد";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "گذرواژه را تکرار کنید";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "گذرواژه مطابقت ندارد";
  } else {
    delete errors.confirmPassword;
  }
  return errors;
};
