const checkElementHorDimension = (el, length, ignoredClasses) => {
    if (!el || !el.offsetWidth) {
        return;
    }
    const $el = $(el);
    const offset = $el.offset();
    const offsetLeft = offset.left;
    const width = $el.outerWidth();
    const dim = offsetLeft + width;
    if (dim > length) {
        let classIgnored = false;
        ignoredClasses.forEach(i => {
            if ($el.closest(i).length > 0) {
                classIgnored = true;
            }
        });
        if (!classIgnored) {
            console.log(el, offsetLeft, width, dim);
        }
    }
};

const scanNode = (n, length, ignoredClasses) => {
    if (n) {
        checkElementHorDimension(n, length, ignoredClasses);
    }
    if (n.childNodes && n.childNodes.length) {
        const cns = Array.from(n.childNodes);
        cns.forEach(cn => scanNode(cn, length, ignoredClasses));
    }
};

/**
 * Traverses through a DOM to find elements that are larger than a specfic length
 * @param length {Number} Usually will be entered as window.innerWidth
 * @param ignoredClasses {Array} An array of classes (i.e. [".slick-track", ".annoying-element"])
 */
const checkDimensions = (length, ignoredClasses) => {
    scanNode(document.body, length, ignoredClasses);
};
