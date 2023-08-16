// Project - 1
// Create Email validator with the help of regular expression concept ...

const validateEmail = (email?: String | undefined): String => {
  const pattern = new RegExp(
    /[(A-Z)|(a-z)|(0-9)|_]{1,}\@{1}[a-z]{1,10}\.{1}[a-z]{1,10}/
  );
  if (email) {
    const validatingEmail = email.match(pattern);
    // console.log(validatingEmail);
    if (validatingEmail !== null) {
      return validatingEmail[0];
    } else {
      throw 'Please Give a valid email address';
    }
  } else {
    throw 'Please Give a valid email address';
  }
};

try {
  let demoEmail: String = 'subhajit2@bapi.com';
  const myEmail = validateEmail(demoEmail || undefined);
  console.log(myEmail);
} catch (e) {
  console.log(e);
}