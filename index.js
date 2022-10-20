const htmlString = `<style> .red-txt{ color: red;}</style><div style="color: #ff0000">red text</div>`;

const { Editor } = toastui;
const { colorSyntax } = Editor.plugin;

const editor = new Editor({
  el: document.querySelector("#editor"),
  previewStyle: "vertical",
  initialValue: `<em>Initial</em> **Value** <span style="color: red">red this</span> <b>bold this</b> 
  # My First Heading <p>My first paragraph.</p>`,
  height: "500px",
  plugins: [colorSyntax],
  initialEditType: "wysiwyg",
});

editor.show();
