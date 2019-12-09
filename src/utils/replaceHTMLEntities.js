const HTMLentities = {
  '&laquo;': '«',
  '&raquo;': '»',
};

const replaceHTMLEntities = (HTMLstring) => (
	HTMLstring.replace(/&#?\w+;/g, match => HTMLentities[match])
);

export default replaceHTMLEntities;