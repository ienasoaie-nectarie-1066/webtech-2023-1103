//class Software
class Software{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log(`${this.name} is running...`)
    }
}

const software = new Software('Adobe');
software.run();

class PlugIn{
    constructor(code){
        this.code = code;
    }
    install(){
        console.log(`Plugin ${this.code} is installed.`)
    }
}

const plug = new PlugIn('AdBlock');
plug.install();

class Browser extends Software{
    constructor(name){
        //functionality derived from Software, the constructor
        super(name)
        this.plugins = [] 
    }
    add(p){
        this.plugins.push(p);
    }
    install(){
        console.log('Installing all plugins')
        for(const p of this.plugins){
            //using the install method from the PlugIn class
            p.install()
        }
    }
}

const browser = new Browser('Google')
const p2 = new PlugIn('gitCheckr')
const p3 = new PlugIn('Socialblade')
browser.add(plug)
browser.add(p2)
browser.add(p3)
browser.install()