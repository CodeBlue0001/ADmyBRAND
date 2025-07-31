import { Badge, Stat } from "@chakra-ui/react"

// const Demo = () => {
//   return (
//     <Stat.Root>
//       <Stat.Label>Unique visitors</Stat.Label>
//       <Stat.ValueText>192.1k</Stat.ValueText>
//       <Badge colorPalette="red" variant="plain" px="0">
//         <Stat.DownIndicator />
//         1.9%
//       </Badge>
//     </Stat.Root>
//   )
// }

export function MetricCard({ title, value, icon }) {
  if(title=="Users"){
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition duration-300 hover:scale-[1.05] cursor-pointer">
      <div className="p-3 rounded-full bg-blue-500 text-white text-2xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold">{title}</p>
              <Stat.Root>

        <Stat.ValueText>{value}</Stat.ValueText>

          <Badge colorPalette="green" variant="plain" px="0">
            
            <Stat.UpIndicator/>
             +2k
          </Badge>
          
    </Stat.Root>
      </div>
      
    </div>
  );
}
else if( title=="Revenue"){
  return(
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition duration-300 hover:scale-[1.05] cursor-pointer">
      <div className="p-3 rounded-full bg-blue-500 text-white text-2xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold">{title}</p>
        {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p> */}

      <Stat.Root>

        <Stat.ValueText>{value}</Stat.ValueText>

          <Badge colorPalette="green" variant="plain" px="0">
            
            <Stat.UpIndicator/>
            +1.2% 
          </Badge>
    </Stat.Root>
      </div>
      
    </div>
    
  );
}
else if (title=="Growth"){
  return(
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition duration-300 hover:scale-[1.05] cursor-pointer">
      <div className="p-3 rounded-full bg-blue-500 text-white text-2xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold">{title}</p>
        {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p> */}

      <Stat.Root>

        <Stat.ValueText>{value}</Stat.ValueText>

          <Badge colorPalette="green" variant="plain" px="0">
            
            <Stat.UpIndicator/>
            +5% 
          </Badge>
    </Stat.Root>
      </div>
      
    </div>
    
  );
}
else {
  
      return(
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center space-x-4 transform transition duration-300 hover:scale-[1.05] cursor-pointer">
      <div className="p-3 rounded-full bg-blue-500 text-white text-2xl flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-gray-500 dark:text-gray-400 font-semibold">{title}</p>
        {/* <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p> */}

      <Stat.Root>

        <Stat.ValueText colorPalette="green">{value}</Stat.ValueText>

          <Badge colorPalette="green" variant="plain" px="0">
            
            <Stat.UpIndicator/>
            +1.5%
          </Badge>
    </Stat.Root>
      </div>
      
    </div>
    
  );

}
}
