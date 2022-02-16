module.exports = {
    checkSelected: function(elem, list) {
        if(list.indexOf(elem) > -1) {
          return 'checked'
        }
        return '';
    }
};