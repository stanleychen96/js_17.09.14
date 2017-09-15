/**
 * 2017-09-15 Stanley Chen
 */

var devices = ['/dev/console', '/dev/display'];

/** 
function open(dev){
     var index = devices.indexOf(dev);

    if(index < 0) {
         console.log('not found');
     } else {
         drivers[index].open();
     }
     return index;
};
*/

function open(dev){
  for(var n = 0; n < drivers.length; n++){
    if(drivers[n].type === dev) {
        drivers[n].open();
        return n;
    }
  }
}


function write(dev, content){
    return drivers[dev].write(content)
};

function read(dev){
    return drivers[dev].read()
};

function close(dev){
    return drivers[dev].close()
};

var drivers = [
    {
        type: '/dev/console',
        open: function(){
            console.log(`console.open`)
        },
        write: function(content){
            console.log(`console.write ${content}`)
        },
        read: function(){
            console.log('console.read')
        },
        close: function(){
            console.log('console.close')
        }
    },
    {
        type: '/dev/display',
        open: function(){
            console.log(`display.open`)
        },
        write: function(content){
            console.log(`display.write ${content}`)
        },
        read: function(){
            console.log('display.read')
        },
        close: function(){
            console.log('display.close')
        }
    }
];

var fd = open('/dev/display');
write (fd, 'content');
close (fd);


