
import path from 'path';
import fs from 'fs';
import archiver from 'archiver';





const addNewLine = (param:string) => {
    param+= "\n"
    fs.appendFile('text.txt',param, function (err:any) {
    
      if(err) {
        console.log(err);
      }
    console.log('completed');
      
    });   
}


const copyFile = (source: string, destination: string) => {
    
    if (!fs.existsSync(source)) {
      console.error(`Kaynak dosya bulunamadı: ${source}`);
      return;
    }
  
    
    if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
      destination = `${destination}/${source.split('/').pop()}`;
    }
  
    
    try {
      fs.copyFileSync(source, destination);
      console.log(`Dosya başarıyla kopyalandı: ${destination}`);
    } catch (error) {
      console.error(`Dosya kopyalanırken hata oluştu: ${error}`);
    }
  }



 const zipFolder = (folderPath: string) => {
    const output = fs.createWriteStream(folderPath + '.zip');
    const archive = archiver('zip', { zlib: { level: 9 } });
  
    output.on('close', () => {
      console.log(`"${folderPath}.zip" ZIP arşivi oluşturuldu (${archive.pointer()} bayt)`);
    });
  
    archive.on('error', (error: any) => {
      console.error(`ZIP arşivi oluşturulurken bir hata oluştu: ${error}`);
    });
  
    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
  }
  
  zipFolder('C:/Users/EMREPC/Desktop/b');


  copyFile('C:/Users/EMREPC/Desktop/a.txt','C:/Users/EMREPC/Desktop/projects/');

  
  addNewLine("hi sirr");


