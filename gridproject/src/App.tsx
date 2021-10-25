
import './App.css';
import Member from './data';
import {useEffect} from "react";
import prscCodeGrid from './grid/grid';

 import { GridFitStyle, SelectionStyle } from 'realgrid';
 import { Grid, useGrid,GridInst } from './utils/Hooks/useGrid';
import LUXButton from 'luna-rocket/LUXButton';
import "../src/init"

function App() {
  const mainGrid = useGrid();

  const gridSetting = ({grid, view, provider}:GridInst)=> {
    grid.bindData(Member);

    //순번제거
    view.setRowIndicator({visible: false});

    // 풋터 제거
    view.setFooters({visible: false});

    //상태바 제거
    view.setStateBar({visible: false});

    //체크바 제거
    view.setCheckBar({visible:false})

    //그리드 화면에 가득채우기 (width)
    view.setOptions({
      display: {
        fitStyle: GridFitStyle.EVEN_FILL,
        rowHeight: 40
      }
    })
    // 컬럼명 선택시 정렬 불가
    view.sortingOptions.enabled = false;

    view.displayOptions.selectionStyle = SelectionStyle.SINGLE_ROW;

  };

  useEffect(() => {
    mainGrid.handler(gridSetting);
  },[])
  return (
    <div className="App" style={{height: '500px'}}>
    <LUXButton type="confirm" label="Confirm Blue" blue={true} />
    <Grid ref={mainGrid.gridRef}  gridSetting={prscCodeGrid}/>
    </div>
  )
}

export default App;