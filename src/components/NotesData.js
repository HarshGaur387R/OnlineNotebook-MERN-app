import React, { useEffect } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useContext } from 'react';
import NoteContext from './../context/notes/noteContext';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Function to darken a color
function darkenColor(color, percent) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}

function extractNotesDataForPieChart(notes = []) {
  const data = [];
  notes.forEach((e, i) => {
    const index = data.findIndex((v, i) => v.label === e.tag);

    if (index !== -1) {
      data[index].value = data[index].value + 1;
      return
    }
    else {
      data.push({ id: data.length + 1, value: 1, label: e.tag, color: '#FFF500' });
    }
  })
  return data;
}

function extractNotesDataForBarGraph(notes = []) {
  const data = { name: [], stats: [] };

  notes.forEach((e, i) => {

    const index = data.name.findIndex((v) => v === e.tag)

    if (index !== -1) {
      data.stats[index] = data.stats[index] + 1;
      return;
    }
    else {
      data.name.push(e.tag);
      data.stats.push(1);
    }
  })

  return data;
}

export default function NotesData() {

  const { notesState, fetchNotes } = useContext(NoteContext);

  useEffect(() => {
    const func = async () => {
      await fetchNotes();
    }
    func();
  }, []);

  const notes = notesState.notes;

  const data = extractNotesDataForPieChart(notes);
  const barData = extractNotesDataForBarGraph(notes);


  // Darken each color by 10% more than the previous
  const darkenedData = data.map((item, index) => ({
    ...item,
    color: darkenColor(item.color, index * 15),
  }));

  return (
    <div className="notes-data">
      <div className="chats d-flex flex-column justify-content-center align-items-center">

        <div className='top-chart d-flex flex-row justify-content-center align-items-center'>

          <div className="barChart">
            {!notes.length ? '' :
              <ThemeProvider theme={darkTheme}>
                <div>
                  <BarChart
                    xAxis={[
                      {
                        id: 'barCategories',
                        data: barData.name,
                        scaleType: 'band',
                      },
                    ]}
                    series={[
                      {
                        data: barData.stats, color: '#FFF500'
                      },
                    ]}
                    width={400}
                    height={300}
                  />
                </div>
              </ThemeProvider>
            }
          </div>

          <div className="pieChart">
            {!notes.length ? '' :
              <ThemeProvider theme={darkTheme}>
                <PieChart
                  series={[{ data: darkenedData }]}
                  width={400}
                  height={200}
                />
              </ThemeProvider>
            }
          </div>
        </div>


        <div className="bottomChart">
          <div className="lineChart">
            <ThemeProvider theme={darkTheme}>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    color:'#FFF500'
                  },
                ]}
                width={800}
                height={300}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  )
}


/*  <ThemeProvider theme={darkTheme}>
      <div>
        <BarChart
          xAxis={[
            {
              id: 'barCategories',
              data: ['bar A', 'bar B', 'bar C'],
              scaleType: 'band',
            },
          ]}
          series={[
            {
              data: [2, 5, 3],
            },
          ]}
          width={400}
          height={300}
        />
      </div>
    </ThemeProvider>
    */