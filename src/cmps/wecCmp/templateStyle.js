// export default {
//   templateStyle
// }

export const templateStyle = `
<style>
:host {
display: block;
font-family: sans-serif;
text-align: right;
position: fixed;
top: 10px;
right: 10px;
z-index: 1;
}

:host.cursor {
  cursor: url(./cursor.svg), auto;
}

.a11y-menu {
border: none;
cursor: pointer;
postilion: absolute;
background-color: transparent;
background-image: url(./icon.svg)
}

.menu {
  list-style: none;
  position: relative;
  bottom: 0px;
  padding: unset;
  margin: unset;
}

li {
  border: 2px solid black;
  background-color: white;
  padding: 5px 10px;
  text-align: center;
}

li button {
  background-color: transparent;
  border: unset;
  padding: unset;
  margin: unset;
  outline: unset;
  cursor: pointer;
  line-height: inherit;
  font-size: inherit;
}

li:hover,li:active {
  border: 2px solid red;
}

.hide {
  display : none;
}

.big-cursor li button{
  cursor: url(cursor.svg), auto !important;
}

</style>`