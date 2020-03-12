'use strict'
{
  console.clear();
  const myDate = "26-02-2012"; myDate = myDate.split("-");
  const newDate = myDate[1] + "/" + myDate[0] + "/" + myDate[2]; console.log((new Date(newDate).getTime()); //will alert 1330210800000
}