import fsPromise from 'fs/promises';
import path from 'path';

cmdAdd = async(file_name) => {
    if (file_name === undefined || file_name === ""){
            throw new Error("invalid cmd arguments")
    }
    const absPathToFile = path.resolve(this.appData.currDir, file_name); 
    
    const fd = await fsPromise.open(absPathToFile, "w");
    await fd.close();
};

export default cmdAdd;