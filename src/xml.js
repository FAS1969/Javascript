import * as fs from 'fs';
import jsdom from 'jsdom';

const { JSDOM } = jsdom;
const virtualConsole = new jsdom.VirtualConsole();
const myFile = './src/zbozi_feed.xml';
/*
const { window } = new JSDOM(`...`);
const { document } = (new JSDOM(`...`)).window;

const dom = new JSDOM(``, {
  url: "file:///C:/fas/Example/_Javascript/src/zbozi_feed.xml",
  referrer: "https://example.com/",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});
*/

virtualConsole.on('error', () => {
  console.log('ERROR');
});
virtualConsole.on('warn', () => {
  console.log('WARNING');
});
virtualConsole.on('info', () => {
  console.log('INFO');
});
virtualConsole.on('dir', () => {
  console.log('DIR');
});
  let data = JSON.parse(fs.readFileSync(myFile, 'utf8'));
	//data = data.substr(1, data.length -2);
  //console.log(data);
// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`, {
//   contentType: 'text/html',
//   includeNodeLocations: true,
//   storageQuota: 10000000,
//   virtualConsole,
// });
 const dom = new JSDOM(data);
// console.log(dom.window.document.querySelector('p').textContent); // "Hello world"
console.log(dom.window.document.querySelector('SHOPITEM').textContent);
console.log('****************************************************************************');
//! dom.window.document.querySelectorAll('SHOPITEM').forEach((el) => console.log(el.textContent));
JSDOM.fromFile('./src/big.xml').then((dom) => {
  //dom.window.document.querySelectorAll('SHOPITEM').forEach((el) => console.log(el.textContent));
	console.log(dom.window.document.querySelector('SHOPITEM').textContent);
  console.log(dom.window.document.children[0].children.length);
});
