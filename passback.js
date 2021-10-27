// passback.js
// owned by Iberion sp. z o.o. (c) 2021
// created by Piotr Jaworski 
(function (pbValue) {
    var doc;
    try {
        doc = top.document;
    } catch (e) { return }
    if (!doc) return;

    var frame = frameElement;
    if (!frame) return;
    var googletag = top.googletag;
    var slotElement = frameElement.parentNode.parentNode;
    var slotElementId = slotElement.id;

    var foundSlot = null;
    googletag.pubads().getSlots().forEach(slot => {
        if (!foundSlot && slot.getSlotElementId() === slotElementId) {
            foundSlot = slot;
        }
    });

    if (!foundSlot) return;

    // get pb value from externally defined variable pbValue
    if (pbValue) {
        var tgt = foundSlot.getTargeting('passback');
        tgt.push(pbValue);
        foundSlot.setTargeting('passback', tgt);
    }

    googletag.pubads().refresh([foundSlot]);
})(window.passbackValue);
