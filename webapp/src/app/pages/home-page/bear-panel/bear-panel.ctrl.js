module.exports = [
function(){

    this.editBear = function() {
        console.log('Edit ' + this.bear._id + '!');
    }

    this.deleteBear = function() {
        console.log('Delete ' + this.bear._id + '!');
    }

}];