// passback.js
// owned by Iberion sp. z o.o. (c) 2021
// created by Piotr Jaworski 
(function () {
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

    // get pb value from externally defined variable passbackValue
    if (passbackValue) {
        var tgt = foundSlot.getTargeting('passback');
        tgt.push(passbackValue);
        foundSlot.setTargeting('passback', tgt);
    }

    googletag.pubads().refresh([foundSlot]);
})();
