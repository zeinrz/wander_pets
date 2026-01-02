function showPet(identity){
    var transferId = identity;
    var encodedId = encodeURIComponent(transferId);
    window.location.href = "adoption.html?target=" + encodedId + "#selection";
}