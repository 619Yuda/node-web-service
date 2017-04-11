const express= require('express');
const hbs= require('hbs');
const fs= require('fs');
const port =process.env.PORT || 3000;
var app= express(); 
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');
app.use((req,res,next) =>{
var now = new Date().toString();
var log = `${now}: ${req.method}`
fs.appendFile('server.log',log + ' \n', (err) => {
	
	if (err){
		console.log('unable to append to server.log ')
	}
}) ; 

console.log(`${now}: ${req.method}`);
next();		
}  )

app.use(())

app.get('/about',(req ,res)=>
{
	res.render('city.hbs',{ 
pagetitle: 'about Page ' , 
currentYear : new Date().getFullYear(),
	});
}

);



app.use(express.static(__dirname +'/public'));


app.get('/',(req,res)=> {
res.send('hello express !');	
}
);

app.get('/bad',(req,res)=> {
res.send({	errormessage:'impossible'
});	
}
);


app.listen(port);
