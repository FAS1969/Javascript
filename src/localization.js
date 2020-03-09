'use strict'
{
  console.clear();
  // ! **************** https://diary.braniecki.net/2020/02/14/js-intl-in-2020/
  const rtf = new Intl.RelativeTimeFormat("en", {
    localeMatcher: "best fit", // other values: "lookup"
    numeric: "always", // other values: "auto"
    style: "long", // other values: "short" or "narrow"
  });
  // Format relative time using negative value (-1).
  console.log(rtf.format(-1, "day"));
  // > "1 day ago"
  // Format relative time using positive  value (1).
  console.log(rtf.format(1, "day"));
  //-----------
  let loc = new Intl.Locale("pl-u-hc-h12", {
    calendar: "gregory"
  });
  console.log(loc.language); // "pl"
  console.log(loc.hourCycle); // "h12"
  console.log(loc.calendar); // "gregory"
  console.log(loc.toString()); // "pl-u-ca-gregory-hc-h12"
  //---------------
  loc = new Intl.Locale("en-CA", {
    region: "US",
    hourCycle: "h24",
  });
  let dtf = new Intl.DateTimeFormat(loc, { hour: "numeric" });
  console.log(loc.language); // "en"
  console.log(dtf.resolvedOptions().hourCycle); // "h24"
  console.log((987654321).toLocaleString("en-US", {
    notation: "scientific"
  })); // 9.877E8
  console.log((987654321).toLocaleString("en-US", {
    notation: "engineering"
  })); // 987.7E6
  console.log((987654321).toLocaleString("en-US", {
    notation: "compact",
    compactDisplay: "long"
  })); // 987.7 million
  //---------------
  let o = new Intl.DateTimeFormat("en", {
    timeStyle: "short"
  });
  console.log(o.format(Date.now())); // "13:31"
  let o1 = new Intl.DateTimeFormat("en", {
    dateStyle: "short"
  });
  console.log(o1.format(Date.now())); // "21.03.2012"
  let o2 = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
    dateStyle: "short"
  });
  console.log(o2.format(Date.now())); // "21.03.2012, 13:31"
  //---------------------
  let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));
  // request a weekday along with a long date
  let options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  console.log(new Intl.DateTimeFormat('de-DE', options).format(date));
  // → "Donnerstag, 20. Dezember 2012"
}